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
import { Tab } from '@mui/material';
import Image from 'next/image'

export function LearnMoreDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="md:px-2 md:h-[34px]">
          Learn More
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-auto">
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
                <p>
                  The <code className='rounded-md bg-muted px-1 py-0.5'>How Thirsty is your LLM?</code>
                  project (or <code className='rounded-md bg-muted px-1 py-0.5'>Thirsty LLM</code> for short)
                  aims to visualize the immense water and electricity usage of Large Language Models (LLMs)</p>
                <br />
                <p>
                  <code className='rounded-md bg-muted px-1 py-0.5'>Electricity consumption</code>
                  comes from the computers needed to power the LLMs.
                </p>
                <br />
                <p>
                  <code className='rounded-md bg-muted px-1 py-0.5'>Water consumption</code>
                  comes from the fresh water used to cool the computers needed to power the LLMs.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Why Individual Impact?</AccordionTrigger>
              <AccordionContent>
                <p>This project focuses on quantifying the environmental impact of a single user{"'"}s (that{"'"}s you!) to make the large environmetal impact of just a single user hit home.</p>
                <br />
                <p>That{"'"}s why while we measure the impact in milliliters (mL) and kilo-watt-hours (kWh) we also measure the resource draw in relatable measurements (i.e. # of Coke Cans, # of AA Batteries, # of Light Bulbs powered for 1 hour)</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I use Thirsty LLM {'"'}properly{'"'}?</AccordionTrigger>
              <AccordionContent>
                <p>
                  There{"'"}s no right or wrong way to use this project!
                  Simply chat with this{' '}
                  <Link className="underline" href={"https://vercel.com/templates/next.js/nextjs-ai-chatbot"} target="_noblank">
                    Vercel AI-SDK
                  </Link>{' '}
                  implementation of{' '}
                  <Link className="underline" href={"https://openai.com/index/hello-gpt-4o/"} target="_noblank">
                    OpenAI{"'"}s GPT-4o
                  </Link>{' '}
                  like you would with ChatGPT.
                </p>
                <br />
                <p>
                  When you{"'"}re ready to see the environmental impact, press the <code className='rounded-md bg-muted px-1 py-0.5'><RecyclingIcon fontSize='small' />
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
                  innovators, and society as a whole to work on improving the environmental sustainability
                  of this groundbreaking technology as a united collective.
                </p>
                <br />
                <small>
                  Perhaps the AI and LLM environmental challenge will be part of a larger movement helping
                  to connect people from all walks of life...
                </small>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Difficulty in Estimations</AccordionTrigger>
              <AccordionContent>
                <>
                  The environmental impact of LLMs is quite difficult to estimate because:
                  <p><Tab />1. LLMs are blackboxes (Closed Source)</p>
                  <p><Tab />2. LLMs are distributed (accross the globe)</p>
                  <p><Tab />3. LLMs are parallel processing architectures</p>
                </>
                <br />

                <>
                  <strong>1. LLMs are blackboxes</strong>
                  <p>
                    Most LLMs like OpenAI{"'"}s ChatGPT are closed source meaning that we have no access to the
                    code used to run these models--making it quite difficult to reproduce 3rd party
                    monitoring of resource consumption.
                  </p>
                  <br />
                  <p>
                    This requires researchers to rely on self-reporting in
                    order to estimate LLM impact.
                  </p>
                </>

                <br />

                <>
                  <strong>2. LLMs are distributed</strong>
                  <p>
                    Like many largescale software systems, LLMs are {'"'}distributed{'"'}, meaning that instances(copies) of
                    LLMs are replicated in data centers across the globe.
                  </p>
                  <br />
                  <p>
                    For electricity, the environmental impact of LLM usage will vary depending on the location, energy efficiency, and
                    energy availability of the power plant powering the data center the LLM {'"'}lives in{'"'}.
                  </p>
                  <br />
                  <p>
                    For water, the environmental impact of LLM usage will vary depending on the data center{"'"}s access
                    to water and the ambient temperature. Since hotter areas require more cooling and thus more water,
                    a data center in Arizona would consume more water than a hypothetical data center in Alaska.
                  </p>
                  <br />
                  <p>
                    Since it{"'"}s not possible to know where models are being hosted for a specific conversation, we
                    rely on simplifying assumptions about baseline water and electricity usage.
                  </p>
                </>

                <br />

                <>
                  <strong>3. LLMs Process in Parallel</strong>
                  <p>
                    One of the main reasons why LLMs are so powerful is because they leverage the{' '}
                    <Link href={"https://arxiv.org/abs/1706.03762"} target='_noblank' className="underline">
                      Transformer Architecture
                    </Link>{' '}
                    which allows many of the computations to be in parallel on specialized hardware known as
                    Graphical Processing Units (GPUs).
                  </p>
                  <br />
                  <p>
                    Thus, LLMs process {'"'}batches{'"'} or many conversations simultaneously--making it difficult to estimate
                    the environmental impact of a single conversation.
                  </p>
                  <br />
                </>

                <small>
                  Note: Since we are focusing on the individual impact of user convesations with LLMs, we do not factor in
                  the large amount of water and electricity needed to train the models and calculate only for
                  model inference.
                </small>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Methods</AccordionTrigger>
              <AccordionContent>
                <p>
                  Due to the difficulties mentioned in{' '}
                  <code className='rounded-md bg-muted px-1 py-0.5'>
                    Difficulty in Estimations
                  </code>{' '}
                  we use simplifying assumptions from the paper{' '}
                  <Link href={"https://arxiv.org/abs/2304.03271"} target='_noblank' className="underline">
                    Making AI Less {'"'}Thirsty{'"'}
                  </Link>{' '}
                  used in the Washington Post Article{' '}
                  <Link href={"https://www.washingtonpost.com/technology/2024/09/18/energy-ai-use-electricity-water-data-centers/"} target='_noblank' className="underline">
                    The Hidden Environmental Costs of Using AI Chatbots
                  </Link>{' '},
                  we make the simplifying assumption that:
                </p>
                <p><Tab />100 words = 519 mL of water</p>
                <p><Tab />100 words = 0.14 kWh </p>
                <small>
                  1 kWh (kiloWatt-hour) is the amout of energy needed to power a 1000 Watt device (say a 1kW light bulb)
                  for one hour.
                </small>
                <br /><br />
                <small>
                  Thus, 0.14 k(ilo)Wh = 140 Watt Hours = power fourteen 10-Watt LED light bulbs for 1 hour
                </small>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Future Considerations</AccordionTrigger>
              <AccordionContent>
                <p>
                  LLM companies such as OpenAI and Anthropic are seeing boosts in model
                  performance through larger models according to{' '}
                  <Link target='_noblank' className="underline" href={"https://arxiv.org/abs/2001.08361"}>
                    scaling laws
                  </Link>{' '}
                  --the idea that larger models have a predictable increase in improvement.
                  However, the danger is that model size increase is also strongly indicative of LLM resource draw.
                </p>
                <br />
                <p>
                  Yet, as policy and the AI field continues to evolve, such as advances in cooling and GPU chip technology,
                  the environmental impact of LLMs have the potential to become more environmentally friendly.
                </p>
                <br />
                <p>
                  As a specific example,{' '}
                  <code className='rounded-md bg-muted px-1 py-0.5'>
                    Hugging Face
                  </code>{' '}
                  policy primer
                  <Link target='_noblank' className="underline" href={"https://doi.org/10.57967/hf/3004"}>
                    The Environmental Impacts of AI -- Primer
                  </Link>{' '}
                  also explains that stratgies such as choosing smaller task specific LLMs versus larger
                  multi-task LLMs and flexible training schedules can decrease CO2 emissions.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Technical Details (for Geeks)</AccordionTrigger>
              <AccordionContent>
                <p>
                  This project is built on the{' '}
                  <Link className="underline" href={"https://vercel.com/templates/next.js/nextjs-ai-chatbot"} target="_noblank">
                    Vercel AI-SDK Chatbot Template
                  </Link>{' '}
                  with custom LLM tool functions for estimating the environmental impact.
                </p>
                <p>
                  In the default state of the Model View Controller (MVC), the user interacts with the app in
                  {'"'}Chat mode{'"'}. Once the {' '}
                  <code className='rounded-md bg-muted px-1 py-0.5'>
                    <RecyclingIcon fontSize='small' />Get Environmetal Impact
                  </code>{' '}
                  is pressed, the app prompts the LLM to call the custom{' '}
                  <code className='rounded-md bg-muted px-1 py-0.5'>
                    getEnvironmentalImpact
                  </code>{' '}
                  tool which calculates the estimated electricity and water draw based on the running word count
                  of the System Prompt, user messages, and tool response.
                </p>
                <br />
                <div style={{ width: '50%', height: 'auto' }}>
                  <Image
                    src="/images/UI_Flowchart.png"
                    alt="Flowchart of UI"
                    layout="responsive"
                    width={500}
                    height={300}
                  />
                </div>
                <br />
                <p>
                  For deployment, authentication, and datastore, we use the Vercel platform{"'"}s built-in CI/CD,
                  Postgres Relational Database, and Vercel Blob storage.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Citations</AccordionTrigger>
              <AccordionContent>
                <p>
                  Kaplan, J., McCandlish, S., Henighan, T., Brown, T. B., Chess, B., Child, R., Gray, S., Radford,
                  A., Wu, J., & Amodei, D. (2020). Scaling Laws for Neural Language Models. arXiv:
                  2001.08361. ​​https://arxiv.org/abs/2001.08361
                </p>
                <br />
                <p>
                  Li, P ., Y ang, J., Islam, M. A., & Ren, S. (2023). Making AI Less “Thirsty”: Uncovering and
                  Addressing the Secret Water Footprint of AI Models. arXiv preprint arXiv:2304.03271.
                  https://arxiv.org/abs/2304.03271
                </p>
                <br />
                <p>
                  Luccioni, S., Trevelin, B., & Mitchell, M. (2024). The Environmental Impacts of AI -- Policy
                  primer. Hugging Face, https://doi.org/10.57967/hf/3004
                </p>
                <br />
                <p>
                  Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., &
                  Polosukhin, I. (2017). Attention Is All You Need. arXiv preprint arXiv:1706.03762.
                  https://arxiv.org/abs/1706.03762
                </p>
                <br />
                <p>
                  Verma, P ., & Tan, S. (2024). A Bottle of Water Per Email: the Hidden Environmental Costs of
                  Using AI Chatbots. Washington Post. www.washingtonpost.com/technology/2024/09/
                  18/energy-ai-use-electricity-water-data-centers/
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <DialogFooter>
          <Link href="https://github.com/Ky-Ng/thirsty-llm" target="_noblank">
            <Button type="submit"><GitHubIcon />See Github</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  );
}
