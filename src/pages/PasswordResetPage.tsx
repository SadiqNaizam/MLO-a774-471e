import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AuthLayoutCard from '@/components/AuthLayoutCard';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const PasswordResetPage: React.FC = () => {
  // In a real app, you'd get the token from the URL, e.g., using useParams
  const { token } = useParams<{ token?: string }>(); 
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('PasswordResetPage loaded. Token (placeholder):', token || "No token provided");
    if (!token) {
        // setError("Invalid or missing reset token. Please request a new password reset link.");
        // This is just a placeholder, real token validation would happen here
        console.warn("No token found in URL for password reset. This page might not function as expected without a valid token.");
    }
  }, [token]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    // Simulate API call to reset password with the token
    console.log('Password reset attempt for token:', token, 'with new password.');
    setSuccess('Your password has been successfully reset. You can now sign in with your new password.');
    
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  const logoPlaceholder = <img src="https://placehold.co/120x40?text=AppLogo" alt="App Logo" />;

  return (
    <AuthLayoutCard
      title="Reset Your Password"
      description="Enter your new password below."
      logo={logoPlaceholder}
      footerContent={
        !success && (
          <div className="text-sm text-muted-foreground">
            <Link to="/login" className="font-medium text-primary hover:underline">
              Back to Sign In
            </Link>
          </div>
        )
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert variant="default" className="bg-green-100 border-green-400 text-green-700">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}
        {!success && (
          <>
            <div className="space-y-1">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </>
        )}
      </form>
    </AuthLayoutCard>
  );
};

export default PasswordResetPage;