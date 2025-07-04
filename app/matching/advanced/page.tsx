"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"

interface Match {
  id: string
  score: number
  matchType: string
  business: {
    id: string
    name: string
    industry: string
    location: string
    rating: number
  }
  reasons: string[]
}

export default function AdvancedMatchingPage() {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchMatches() {
      try {
        const res = await fetch("/api/matching/advanced", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: "demo-user",
            matchType: "funding",
            criteria: { location: "South Africa" },
          }),
        })
        const data = await res.json()
        setMatches(data.matches || [])
      } catch (err) {
        setError("Failed to load matches.")
      } finally {
        setLoading(false)
      }
    }
    fetchMatches()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <Loader2 className="animate-spin h-8 w-8 text-orange-500" />
      </div>
    )
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">Advanced Matches (Demo)</h1>
      {matches.length === 0 ? (
        <p className="text-gray-600">No matches returned.</p>
      ) : (
        <div className="space-y-6">
          {matches.map((match) => (
            <Card key={match.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{match.business.name}</span>
                  <Badge className="bg-orange-500 text-white">{match.score}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <strong>Industry:</strong> {match.business.industry}
                </p>
                <p>
                  <strong>Location:</strong> {match.business.location}
                </p>
                <p>
                  <strong>Rating:</strong> {match.business.rating}
                </p>
                <div>
                  <strong>Why it matched:</strong>
                  <ul className="list-disc list-inside">
                    {match.reasons.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
