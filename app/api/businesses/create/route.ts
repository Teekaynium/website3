import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const businessData = await request.json()

    // In a real application, you would:
    // 1. Validate business data
    // 2. Check for duplicate business names
    // 3. Save to database
    // 4. Create business profile
    // 5. Set up initial matching preferences

    const business = {
      id: Date.now().toString(),
      ...businessData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isVerified: false,
      rating: 0,
    }

    return NextResponse.json({
      message: "Business created successfully",
      business,
    })
  } catch (error) {
    console.error("Error creating business:", error)
    return NextResponse.json({ error: "Failed to create business" }, { status: 500 })
  }
}
