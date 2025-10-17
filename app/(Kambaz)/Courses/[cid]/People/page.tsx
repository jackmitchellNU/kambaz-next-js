"use client"
import { redirect } from "next/navigation";
import { useParams } from "next/navigation";

export default function PeopleIndex() {
  const { cid } = useParams<{ cid: string }>();
  redirect(`/Courses/${cid}/People/Table`);
}
