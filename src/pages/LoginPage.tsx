import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayoutCard from '@/components/AuthLayoutCard';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('user@example.com'); // Default credential
  const [password, setPassword] = useState('password123'); // Default credential
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('LoginPage loaded');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    console.log('Login attempt:', { email, password, rememberMe });

    // Simulate API call & validation
    if (email === 'user@example.com' && password === 'password123') {
      // Simulate successful login
      console.log('Login successful');
      // In a real app, you would set auth tokens here
      navigate('/dashboard'); // Redirect to PostLoginPage
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const logoPlaceholder = <img src="https://placehold.co/120x40?text=AppLogo" alt="App Logo" />;

  return (
    <AuthLayoutCard
      title="Sign In"
      description="Welcome back! Please enter your details."
      logo={logoPlaceholder}
      footerContent={
        <>
          <div className="text-sm">
            <Link to="/forgot-password" className="font-medium text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="font-medium text-primary hover:underline">
              Sign Up
            </Link>
          </div>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Login Failed</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember-me"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label htmlFor="remember-me" className="text-sm font-normal">Remember me</Label>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </AuthLayoutCard>
  );
};

export default LoginPage;