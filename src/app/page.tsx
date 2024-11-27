import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Root() {
  redirect("/ar");
}
