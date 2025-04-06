export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">ようこそ！</h1>
      <p className="text-xl mb-4">これはNext.jsで作成したシンプルなホームページです。</p>
      <div className="flex gap-4">
        <a href="https://nextjs.org" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Next.jsについて
        </a>
        <a href="https://vercel.com" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Vercelについて
        </a>
      </div>
    </main>
  );
} 