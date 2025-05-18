
import React, { ReactNode } from "react";
import { useLanguage } from "@/hooks/use-language";

interface RTLProviderProps {
  children: ReactNode;
}

export function RTLProvider({ children }: RTLProviderProps) {
  const { language } = useLanguage();
  
  React.useEffect(() => {
    document.dir = language === 'ar' ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}
