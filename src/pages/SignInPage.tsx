import React, { useState } from "react"
import { User, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"
import { useLanguage } from "../hooks/useLanguage"
import { Reveal } from "../components/animation/Reveal"
import { StaggerText } from "../components/animation/StaggerText"
import { LoadingState } from "../components/LoadingState"
import { useNavigate } from "react-router-dom"
import { login } from "../services/api"

export const SignInPage: React.FC = () => {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const content =
    language === "uz"
      ? {
          title: "Kirish",
          usernameLabel: "Foydalanuvchi nomi",
          passwordLabel: "Parol",
          submitBtn: "Kirish",
          signingIn: "Kirish...",
          invalidCredentials: "Noto'g'ri foydalanuvchi nomi yoki parol",
          loginSuccess: "Muvaffaqiyatli kirildi!",
        }
      : {
          title: "Sign In",
          usernameLabel: "Username",
          passwordLabel: "Password",
          submitBtn: "Sign In",
          signingIn: "Signing in...",
          invalidCredentials: "Invalid username or password",
          loginSuccess: "Successfully signed in!",
        }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!username || !password) {
      setError(
        language === "uz"
          ? "Iltimos, barcha maydonlarni to'ldiring"
          : "Please fill in all fields",
      )
      return
    }

    setLoading(true)
    setError("")

    const result = await login(username, password)

    if (result.success) {
      setSuccess(content.loginSuccess)
      // Redirect to home page after successful login
      setTimeout(() => {
        navigate("/", { replace: true })
      }, 1500)
    } else {
      setError(result.error || content.invalidCredentials)
    }

    setLoading(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(185,28,28,0.18),_transparent_38%),linear-gradient(180deg,#111827_0%,#020617_100%)] flex items-center justify-center px-4">
      <div className="absolute inset-x-10 top-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute inset-x-16 bottom-16 h-40 rounded-full bg-red-600/8 blur-3xl" />

      <Reveal className="w-full max-w-md">
        <div className="text-center mb-8 relative z-10">
          <StaggerText
            text={content.title}
            className="text-3xl font-black text-white mb-2 block"
          />
          <div className="h-1 w-16 bg-red-600 rounded-full mx-auto" />
        </div>

        <div className="relative z-10 bg-white/6 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_18px_60px_rgba(0,0,0,0.3)] border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-sm">
                {success}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">
                {content.usernameLabel}
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-4 bg-gray-700/70 border border-gray-600 rounded-xl outline-none transition-all text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 disabled:opacity-50"
                  placeholder="username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">
                {content.passwordLabel}
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  className="w-full pl-12 pr-12 py-4 bg-gray-700/70 border border-gray-600 rounded-xl outline-none transition-all text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 disabled:opacity-50"
                  placeholder="........"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors disabled:opacity-50"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary btn-full py-4 text-lg"
            >
              {loading ? (
                <LoadingState label={content.signingIn} compact />
              ) : (
                <>
                  <span>{content.submitBtn}</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  )
}
