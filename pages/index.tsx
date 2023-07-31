import { Inter } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import PostList from '@/react-query-examples/posts-page';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="flex flex-col gap-4">
        <h1 className="text-violet-600">Shadcn Component Example!</h1>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <Button>Shadcn Button</Button>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lime-600">React Query Example!</h1>
        <PostList />
      </div>
    </main>
  );
}
