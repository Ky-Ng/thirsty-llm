import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import OpacityIcon from '@mui/icons-material/Opacity';
import FlashOnIcon from '@mui/icons-material/FlashOn';

export function ContentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="md:px-2 md:h-[34px]">
          Learn More
        </Button>
      </DialogTrigger>
      {/* <DialogContent className="sm:max-w-[425px]"> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How Thirsty is Your LLM?</DialogTitle>
          <DialogDescription>
            Understand the estimated <OpacityIcon fontSize='small' /> water and <FlashOnIcon fontSize='small' /> electricity consumption of your AI powered conversations
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is the Thirsty LLM Project?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div> */}
          <p>hi</p>
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
