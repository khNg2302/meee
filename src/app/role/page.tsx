"use client";
import { getRoles } from "@/firebase/getRoles";
import { useGetList } from "@/hooks/useGetList";
import { UserRole } from "@/types/user";
import { useEffect, useState } from "react";

const Role = () => {
  const [roles, setRoles] = useState<UserRole[]>([]);
  const { getList } = useGetList();

  useEffect(() => {
    getList(getRoles, setRoles);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>{JSON.stringify(roles)}</div>;
};

export default Role;
