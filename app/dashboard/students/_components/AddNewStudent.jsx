"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { set, useForm } from "react-hook-form";
import GlobalApi from "@/app/_services/GlobalApi";
import { index } from "drizzle-orm/mysql-core";
import { useToast } from "@/hooks/use-toast";
import { LoaderIcon } from "lucide-react";

function AddNewStudent() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetAllGradesList();
  }, []);
  const GetAllGradesList = () => {
    GlobalApi.GetAllGrades().then((res) => {
      setGrades(res.data);
      console.log(res.data);
    });
  };

  const onSubmit = (data) => {
    setLoading(true);
    GlobalApi.CreateNewStudent(data)
      .then((res) => {
        console.log(res);
        setIsOpen(false);
        if (res.status === 200) {
          reset();
          setLoading(false);
          toast({
            title: "Success",
            description: "New Student Added!",
            variant: "success", // Use the correct variant type based on your toast library
          });
        } else {
          setLoading(false);
          toast({
            title: "Error",
            description: "Failed to add new students.",
            variant: "error", // Use the correct variant type based on your toast library
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Failed to create new student:", error);
        toast({
          title: "Error",
          description: "Failed to add new student.",
          variant: "error", // Use the correct variant type based on your toast
        });
      });
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>+ Add New Student</Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-2">
                  <label>Full Name</label>
                  <Input
                    className="mt-3"
                    placeholder="Ex. John Doe"
                    {...register("name", { required: true })}
                  />
                  {errors.fullName && <span>This field is required</span>}
                </div>
                <div className="flex flex-col py-2">
                  <label>Select Grade</label>
                  <select
                    className="p-2 mt-2 border rounded-lg"
                    {...register("grade", { required: true })}
                  >
                    {grades.map((grade, index) => (
                      <option key={index} value={grade.grade}>
                        {grade.grade}
                      </option>
                    ))}
                  </select>
                  {errors.grade && <span>This field is required</span>}
                </div>
                <div className="py-2">
                  <label>Address</label>
                  <Input
                    type="text"
                    className="mt-2"
                    placeholder="Ex. No 20, St paul estate, Pallepanguwa"
                    {...register("address", { required: true })}
                  />
                  {errors.contactNumber && <span>This field is required</span>}
                </div>
                <div className="py-2">
                  <label>Contact Number</label>
                  <Input
                    type="number"
                    className="mt-2"
                    placeholder="Ex. 981771248"
                    {...register("contact", { required: true })}
                  />
                  {errors.contactNumber && <span>This field is required</span>}
                </div>

                <div className="flex items-center justify-end gap-3 my-5">
                  <Button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    {loading ? <LoaderIcon className="animate-spin" /> : "Add Student"}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewStudent;
