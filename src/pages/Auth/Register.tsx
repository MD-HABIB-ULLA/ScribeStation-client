import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router";

interface FormData {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
  };

  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      {/* Left side - Image */}
      <div className="hidden lg:block relative">
        <img
          src="/images/register.avif"
          alt="Lifestyle photo"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right side - Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center flex items-center justify-center">
            <Link to={"/"}>
              <img src="/images/logofull.png" className="h-10" alt="" />
            </Link>{" "}
          </div>

          {/* Social Login Buttons */}
          <div className="grid md:gap-4 gap-2 md:grid-cols-2 grid-cols-1">
            <Button
              variant="outline"
              className="w-full text-xs md:text-sm"
              type="button"
            >
              <FcGoogle color="#1877F2" size={5} />
              Log in with Google
            </Button>
            <Button
              variant="outline"
              className="w-full text-xs md:text-sm"
              type="button"
            >
              <FaFacebookF size={5} />
              Log in with Facebook
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="md:space-y-2 space-y-1">
              <Input
                {...register("name", { required: true })}
                type="name"
                placeholder="Name "
                className="w-full md:text-sm text-xs"
              />
              {errors.name && (
                <p className="md:text-sm text-xs text-red-500">
                  Name is required
                </p>
              )}
            </div>
            <div className="md:space-y-2 space-y-1">
              <Input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email "
                className="w-full md:text-sm text-xs"
              />
              {errors.email && (
                <p className="md:text-sm text-xs text-red-500">
                  Email is required
                </p>
              )}
            </div>

            <div className="md:space-y-2 space-y-1">
              <div className="relative">
                <Input
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pr-10 md:text-sm text-xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute  md:text-sm text-xs right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className=" text-red-500 md:text-sm text-xs">
                  Password is required
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox {...register("rememberMe")} id="rememberMe" />
              <label
                htmlFor="rememberMe"
                className="md:text-sm text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <Button type="submit" className="w-full">
              LOG IN
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            No Account yet?{" "}
            <a href="#" className="font-semibold text-primary hover:underline">
              SIGN UP
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
