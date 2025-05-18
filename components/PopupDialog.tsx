"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { X } from "lucide-react";

export function PopupDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Popup is currently disabled
    // Will be re-enabled later
    setIsOpen(false);
    
    // Keep the localStorage logic for when we re-enable
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      localStorage.setItem("hasSeenPopup", "true");
    }
    
    return () => {};
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Don't leave SI for a call now and we'll surprise!
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Fill out this form and expect our call
          </DialogDescription>
        </DialogHeader>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-left">
              Email
            </Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone" className="text-left">
              Phone
            </Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="bg-primary text-white w-full py-6">
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
