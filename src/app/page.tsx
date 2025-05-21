import { redirect } from "next/navigation";

export default function Home() {
  redirect("/concerts");
  // if I wanted a true homepage I could make it here but ¯\_(ツ)_/¯
}
