"use client";

import { IUser } from "@/backend/models/user";
import { useDeleteUserMutation } from "@/redux/api/userApi";
import { MDBDataTable } from "mdbreact";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import DataTable, { TableColumn } from "react-data-table-component";
import Loader from "@/components/layout/Loader";

interface Props {
  data: {
    users: IUser[];
  };
}

const columns: TableColumn<any>[] = [
  {
    name: "ID",
    selector: (row) => row.idd,
  },
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Role",
    selector: (row) => row.role,
  },
  {
    name: "Actions",
    selector: (row) => row.actions,
  },
];

const AllUsers = ({ data }: Props) => {
  const users = data?.users;

  const router = useRouter();

  const [deleteUser, { error, isLoading, isSuccess }] = useDeleteUserMutation();

  useEffect(() => {
    if (error && "data" in error) {
      //@ts-ignore
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess) {
      router.refresh();
      toast.success("User deleted");
    }
  }, [error, isSuccess]);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);

  const row: any = [];

  const getRow = () => {
    users.forEach((user) => {
      const obj = {
        id: user._id,
        idd: user._id,
        name: user?.name,
        email: user?.email,
        role: user?.role,
        actions: (
          <>
            <Link
              href={`/admin/users/${user._id}`}
              className="btn btn-outline-primary"
            >
              {" "}
              <i className="fa fa-pencil"></i>{" "}
            </Link>

            <button
              className="mx-2 btn btn-outline-danger"
              disabled={isLoading}
              onClick={() => deleteUserHandler(user?._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </>
        ),
      };
      row.push(obj);
    });
    return row;
  };

  const deleteUserHandler = (id: string) => {
    deleteUser(id);
  };

  return (
    <div className="container">
      <h1 className="my-5">{users?.length} Users</h1>
      {loader ? (
        <Loader />
      ) : (
        <DataTable columns={columns} data={getRow()} pagination />
      )}
    </div>
  );
};

export default AllUsers;
