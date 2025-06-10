import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthLayoutCard from '@/components/AuthLayoutCard';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail, CheckCircle2 } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    console.log('ForgotPasswordPage loaded');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsSuccess(false);
    console.log('Forgot password request for email:', email);

    // Simulate API call
    setMessage(`If an account exists for ${email}, a password reset link has been sent.`);
    setIsSuccess(true);
    // In a real app, you would make an API call here.
  };

  const logoPlaceholder = <img src="https://placehold.co/120x40?text=AppLogo" alt="App Logo" />;

  return (
    <AuthLayoutCard
      title="Forgot Password?"
      description="No worries, we'll send you reset instructions."
      logo={logoPlaceholder}
      footerContent={
        <div className="text-sm text-muted-foreground">
          Remembered your password?{' '}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Back to Sign In
          </Link>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {message && (
          <Alert variant={isSuccess ? "default" : "destructive"} className={isSuccess ? "bg-green-100 border-green-400 text-green-700" : ""}>
            {isSuccess ? <CheckCircle2 className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
            <AlertTitle>{isSuccess ? "Instructions Sent" : "Info"}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
        <div className="space-y-1">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Send Reset Link
        </Button>
      </form>
    </AuthLayoutCard>
  );
};

export default ForgotPasswordPage;