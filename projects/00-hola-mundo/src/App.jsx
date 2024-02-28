import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="varkoms">
        Varko
      </TwitterFollowCard>
      <TwitterFollowCard userName="PlayStation">
        PlayStation
      </TwitterFollowCard>
    </section>
  );
}
