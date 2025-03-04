/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios"; // Import axios for API requests
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";

interface FormData {
  name: string;
  email: string;
  password: string;
  image?: string; // Store Cloudinary image URL
}

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const uploadImageToCloudinary = async (
    file: File
  ): Promise<string | null> => {
    setLoading(true);
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    console.log("Cloud Name:", cloudName);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
      formData.append("upload_preset", "first_time");

      const uploadResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      console.log("Upload Response:", uploadResponse.data);

      if (uploadResponse.data?.secure_url) {
        setLoading(false);
        return uploadResponse.data.secure_url;
      }
      throw new Error("Cloudinary upload failed.");
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      toast.error("Failed to upload image!");
      return null;
    }
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);

      const imageUrl = await uploadImageToCloudinary(file);
      if (imageUrl) {
        setValue("image", imageUrl);
      }
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setValue("image", "");
  };

  const onSubmit = async (data: FormData) => {
    console.log("Form Data with Image URL:", data);

    try {
      const response = await registerUser(data).unwrap();
      console.log("User registered successfully:", response);

      if (response.success) {
        toast.success(response.message);
        navigate("/login");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error("Registration error:", err);
      toast.error("Registration failed!");
    }
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
              <img src="/images/logofull.png" className="h-10" alt="Logo" />
            </Link>
          </div>

          {/* Social Login Buttons */}
          <div className="grid md:gap-4 gap-2 md:grid-cols-2 grid-cols-1">
            <Button variant="outline" className="w-full text-xs md:text-sm">
              <FcGoogle color="#1877F2" size={5} />
              Log in with Google
            </Button>
            <Button variant="outline" className="w-full text-xs md:text-sm">
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
            {/* Name */}
            <div className="md:space-y-2 space-y-1">
              <Input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="w-full md:text-sm text-xs"
              />
              {errors.name && (
                <p className="md:text-sm text-xs text-red-500">
                  Name is required
                </p>
              )}
            </div>

            {/* Email */}
            <div className="md:space-y-2 space-y-1">
              <Input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="w-full md:text-sm text-xs"
              />
              {errors.email && (
                <p className="md:text-sm text-xs text-red-500">
                  Email is required
                </p>
              )}
            </div>

            {/* Password */}
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 md:text-sm text-xs">
                  Password is required
                </p>
              )}
            </div>

            {/* Image Upload */}
            <div className="md:space-y-2 space-y-1">
              <label className="md:text-sm text-xs font-medium">
                Upload Profile Image
              </label>
              <div className="flex items-center gap-4">
                <label
                  htmlFor="image-upload"
                  className="flex items-center justify-center w-24 h-24 border-2 border-dashed border-primary rounded-lg cursor-pointer hover:border-primary/90"
                >
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100"
                      >
                        <X className="h-4 w-4 text-primary" />
                      </button>
                    </div>
                  ) : (
                    <span className="text-gray-500 text-xs text-center">
                      Click to upload
                    </span>
                  )}
                </label>
                {!imagePreview && (
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                )}
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <Checkbox id="rememberMe" />
              <label
                htmlFor="rememberMe"
                className="md:text-sm text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || loading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
                  Loading...
                </div>
              ) : (
                "LOG IN"
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-primary hover:underline"
            >
              LOG IN
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
