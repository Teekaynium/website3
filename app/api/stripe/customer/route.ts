import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(request: NextRequest) {
  try {
    const { email, name, phone, address } = await request.json()

    const customer = await stripe.customers.create({
      email,
      name,
      phone,
      address,
      metadata: {
        platform: "onebridge",
      },
    })

    return NextResponse.json({
      customerId: customer.id,
      customer,
    })
  } catch (error) {
    console.error("Error creating customer:", error)
    return NextResponse.json({ error: "Failed to create customer" }, { status: 500 })
  }
}
