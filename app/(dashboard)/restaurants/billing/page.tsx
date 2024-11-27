import { Calendar, MapPin, Music, Users, Utensils } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * @description pay and then proceed to book restaurant
 */
export default function BillingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Booking Details */}
          <Card>
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5" />
                <div>
                  <div className="font-medium">Today</div>
                  <div className="text-sm text-muted-foreground">
                    26 Sep at 4:30 PM
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5" />
                <div className="font-medium">1 guest</div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <div>
                  <div className="font-medium">The Bar Restaurant</div>
                  <div className="text-sm text-muted-foreground">
                    Connaught Place, Delhi NCR
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Utensils className="w-5 h-5" />
                <div>
                  <div className="font-medium">Order</div>
                  <div className="text-sm text-muted-foreground">
                    Paneer chicken, chilli chicken
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Music className="w-5 h-5" />
                <div className="font-medium">Live Music</div>
              </div>

              <div className="border-t pt-4 mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Cover Charge</span>
                  <span>25</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>25</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>To be paid</span>
                  <span>25</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Select Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="wallets">
                  <AccordionTrigger>Wallets</AccordionTrigger>
                  <AccordionContent>
                    Select your preferred wallet
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cards">
                  <AccordionTrigger>Add credit or debit cards</AccordionTrigger>
                  <AccordionContent>Add your card details</AccordionContent>
                </AccordionItem>

                <AccordionItem value="netbanking">
                  <AccordionTrigger>Netbanking</AccordionTrigger>
                  <AccordionContent>Choose your bank</AccordionContent>
                </AccordionItem>

                <AccordionItem value="upi">
                  <AccordionTrigger>Add New UPI</AccordionTrigger>
                  <AccordionContent>Enter your UPI ID</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
