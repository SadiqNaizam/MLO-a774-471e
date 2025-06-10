import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthLayoutCardProps {
  title: string;
  description?: string;
  children: React.ReactNode; // For form inputs and buttons
  footerContent?: React.ReactNode; // For links like "Forgot password?", "Sign up"
  logo?: React.ReactNode; // Optional: for an application logo
  className?: string;
}

const AuthLayoutCard: React.FC<AuthLayoutCardProps> = ({
  title,
  description,
  children,
  footerContent,
  logo,
  className,
}) => {
  console.log("Rendering AuthLayoutCard with title:", title);

  return (
    <div className={`flex items-center justify-center min-h-screen bg-gray-100 p-4 ${className}`}>
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          {logo && <div className="mb-4 flex justify-center">{logo}</div>}
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className="space-y-4">
          {children}
        </CardContent>
        {footerContent && (
          <CardFooter className="flex flex-col items-center space-y-2 pt-4">
            {footerContent}
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default AuthLayoutCard;