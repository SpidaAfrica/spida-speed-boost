// src/utils/validation.ts
export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Remove all spaces, dashes, parentheses, and dots
  const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
  
  // Accept phone numbers with optional + prefix and 7-15 digits
  // This accepts: +1234567890, 1234567890, +234 123 456 7890, (123) 456-7890, etc.
  const phoneRegex = /^[\+]?[\d]{7,15}$/;
  
  return phoneRegex.test(cleanPhone);
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateForm = (data: Record<string, string>): ValidationResult => {
  const errors: string[] = [];
  
  // Validate required fields
  if (!validateRequired(data.name || '')) {
    errors.push('Name is required');
  } else if (!validateName(data.name)) {
    errors.push('Name must contain only letters and spaces');
  }
  
  if (!validateRequired(data.email || '')) {
    errors.push('Email is required');
  } else if (!validateEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (data.phone && !validatePhone(data.phone)) {
    errors.push('Please enter a valid phone number');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
