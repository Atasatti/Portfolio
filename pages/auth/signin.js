import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Home from '../index';

export default function SignIn() {
  const router = useRouter();
  const { callbackUrl } = router.query;

  return (
    <>
      <Head>
        <title>Sign In - Portfolio</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
        <style>{`
          body {
            overflow: hidden;
          }
          .signin-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            overflow: hidden;
          }
          .signin-modal {
            background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
            padding: 60px 80px;
            border-radius: 20px;
            box-shadow: 
              0 20px 60px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.5) inset;
            text-align: center;
            z-index: 10000;
            min-width: 600px;
            animation: slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform: perspective(1000px) rotateX(0deg);
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: perspective(1000px) rotateX(20deg) scale(0.9);
            }
            to {
              opacity: 1;
              transform: perspective(1000px) rotateX(0deg) scale(1);
            }
          }
          .signin-modal h1 {
            margin-bottom: 10px;
            color: #1a1a1a;
            font-weight: 700;
            font-size: 28px;
            letter-spacing: -0.5px;
          }
          .signin-modal p {
            margin-bottom: 40px;
            color: #666;
            font-size: 14px;
          }
          .google-signin-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 14px 32px;
            font-size: 16px;
            font-weight: 600;
            border: 1px solid #dadce0;
            border-radius: 8px;
            background: white;
            color: #3c4043;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
          }
          .google-signin-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.05);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
          }
          .google-signin-btn:hover::before {
            width: 300px;
            height: 300px;
          }
          .google-signin-btn:hover {
            border-color: #4285f4;
            box-shadow: 
              0 8px 24px rgba(66, 133, 244, 0.3),
              0 2px 8px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
          }
          .google-signin-btn:active {
            transform: translateY(0);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .google-icon {
            font-size: 24px;
            position: relative;
            z-index: 1;
            color: #4285f4;
          }
          .btn-text {
            position: relative;
            z-index: 1;
          }
          .signin-footer {
            margin-top: 20px;
            font-size: 12px;
            color: #999;
          }
        `}</style>
      </Head>

      {/* Homepage in background (blurred) */}
      <div style={{ filter: 'blur(4px)', pointerEvents: 'none' }}>
        <Home session={null} />
      </div>

      {/* Signin Modal on top */}
      <div className="signin-backdrop">
        <div className="signin-modal">
          <h1>Welcome Back</h1>
          <p>Sign in to explore my portfolio</p>

          <button
            onClick={() => signIn('google', { callbackUrl: callbackUrl || '/' })}
            className="google-signin-btn"
          >
            <i className="fab fa-google google-icon"></i>
            <span className="btn-text">Sign in with Google</span>
          </button>

          <div className="signin-footer">
            <p>🔒 Secure authentication with Google</p>
          </div>
        </div>
      </div>
    </>
  );
}