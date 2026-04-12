import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { Input } from "./components/ui/Input";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="p-10 space-y-6">
          <Card>
            <h2 className="text-xl font-semibold mb-4 text-amber-300">
              UI Test
            </h2>
            <Input
              label="Patient Name"
              placeholder="Enter name"
              className="text-lg"
            />
            <Button className="mt-4 text-xs">Book Appointment</Button>
          </Card>
        </div>
      </main>
    </div>
  );
}
