"use client";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

// this will limit the user to a search between 2 - 50 characters
const formSchema = z.object({
  input: z.string().min(2).max(50),
});

function SearchInput() {
  // router is used to route searches to the search page
  const router = useRouter();

  //Define the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  function onSubmit(values) {
    //Testing reasons
    console.log(values);

    //to change url link
    router.push(`/search/${values.input}`);

    //clear user input on search bar
    form.reset();
  }

  return (
    // taken from shadcn following and tweeking there example
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default SearchInput;
