import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
import GitHubIcon from '@mui/icons-material/GitHub';
import RecyclingIcon from '@mui/icons-material/Recycling';
import Link from 'next/link';

export function LearnMoreDialog() {
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
              <AccordionTrigger>What is How Thirsty is your LLM?</AccordionTrigger>
              <AccordionContent>
                <p>The <code className='rounded-md bg-muted px-1 py-0.5'>How Thirsty is your LLM?</code> project (or <code className='rounded-md bg-muted px-1 py-0.5'>Thirsty LLM</code> for short) aims to visualize the immense water and electricity usage of Large Language Models (LLMs)</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Why Individual Impact?</AccordionTrigger>
              <AccordionContent>
                <p>This project focuses on quantifying the environmental impact of a single user's (that's you!) to make the large environmetal impact of even a single user hit home.</p>
                <br />
                <p>That's why while we measure the impact in milliliters (mL) and kilo-watt-hours (kWh) we also measure the resource draw in relatable measurements (i.e. # of Coke Cans, # of AA Batteries, # of Light Bulbs powered for 1 hour)</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I use Thirsty LLM "properly"?</AccordionTrigger>
              <AccordionContent>
                <p>
                  There's no right or wrong way to use this project!
                  Simply chat with this{' '}
                  <Link className="underline" href={"https://vercel.com/templates/next.js/nextjs-ai-chatbot"} target="_noblank">
                    Vercel AI-SDK
                  </Link>{' '}
                  implementation of{' '}
                  <Link className="underline" href={"https://openai.com/index/hello-gpt-4o/"} target="_noblank">
                    OpenAI's GPT-4o
                  </Link>{' '}
                  like you would normally.
                </p>
                <br />
                <p>
                  When you're ready to see the environmental impact, press the <code className='rounded-md bg-muted px-1 py-0.5'><RecyclingIcon fontSize='small' />
                    Get Environmetal Impact</code> button to see the estimated environmetal draw.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Motivation</AccordionTrigger>
              <AccordionContent>
                <p>
                  AI is here to stay.
                </p>
                <br />
                <p>
                  As LLMs and chatbots continue to become more prevalent,
                  this project aims to spread awareness and urgency for the
                  development of research and technological innovations to
                  make LLM (training, inference, and pipeline) more environmentally friendly.
                </p>                
                <br />
                <p>
                  Thus, this project is <strong>not</strong> calling for the end of AI and LLMs,
                  rather it is meant to inspire the next generation of engineers,
                  innovators, and society as a whole to work on improving this groundbreaking technology
                  as a united collective.
                </p>
                <br />
                <small>
                 Perhaps the AI and LLM environmental challenge will be part of a larger movement helping
                 to connect people from all walks of life
                </small>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Methods</AccordionTrigger>
              <AccordionContent>
                <p>
                  AI is here to stay.
                </p>
                <br />
                <p>
                  As LLMs and chatbots continue to become more prevalent,
                  this project aims to spread awareness and urgency for the
                  development of research and technological innovations to
                  make LLM (training, inference, and pipeline) more environmentally friendly.
                </p>                
                <br />
                <p>
                  Thus, this project is <strong>not</strong> calling for the end of AI and LLMs,
                  rather it is meant to inspire the next generation of engineers,
                  innovators, and society as a whole to work on improving this groundbreaking technology
                  as a united collective.
                </p>
                <br />
                <small>
                 Perhaps the AI and LLM environmental challenge will be part of a larger movement helping
                 to connect people from all walks of life
                </small>
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

        </div>
        <DialogFooter>
          <Link href="https://github.com/Ky-Ng/thirsty-llm" target="_noblank">
            <Button type="submit"><GitHubIcon />See Github</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
