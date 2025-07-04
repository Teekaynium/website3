import { type NextRequest, NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import { join } from "path"

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get("file") as unknown as File
    const category: string = data.get("category") as string
    const userId: string = data.get("userId") as string

    if (!file) {
      return NextResponse.json({ error: "No file received" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create a unique filename
    const filename = `${Date.now()}-${file.name}`
    const path = join(process.cwd(), "uploads", category, filename)

    await writeFile(path, buffer)

    // In a real application, you would save this to a database
    const document = {
      id: Date.now().toString(),
      filename: file.name,
      category,
      path: `/uploads/${category}/${filename}`,
      uploadedAt: new Date().toISOString(),
      userId,
    }

    return NextResponse.json({
      message: "File uploaded successfully",
      document,
    })
  } catch (error) {
    console.error("Error uploading file:", error)
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
  }
}
