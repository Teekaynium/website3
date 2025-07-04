import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-200 border-t border-gray-300 px-6 py-3 flex items-center justify-between text-sm text-gray-600">
      <div className="flex items-center space-x-2">
        <span>Onebridge.app</span>
        <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">?</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/terms" className="hover:text-gray-800">
          Terms of Use
        </Link>
        <Link href="/privacy" className="hover:text-gray-800">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
