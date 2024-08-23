import NumberTicker from '@/shadcn/magicui/number-ticker';
import { Timeline } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi';

export default function TimelineComponent() {
    return (
        <Timeline>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Time>February 2022</Timeline.Time>
                    <Timeline.Title>
                        Application UI code in Tailwind CSS
                    </Timeline.Title>
                    <Timeline.Body>
                        Get access to over 20+ pages including a dashboard
                        layout, charts, kanban board, calendar, and pre-order
                        E-commerce & Marketing pages.
                        <NumberTicker
                            value="250"
                            className="ml-10 text-3xl font-bold text-black"
                        />
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Time>March 2022</Timeline.Time>
                    <Timeline.Title>
                        Marketing UI design in Figma
                    </Timeline.Title>
                    <Timeline.Body>
                        All of the pages and components are first designed in
                        Figma and we keep a parity between the two versions even
                        as we update the project.
                        <NumberTicker
                            value="627"
                            className="ml-10 text-3xl font-bold text-black"
                        />
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Time>April 2022</Timeline.Time>
                    <Timeline.Title>
                        E-Commerce UI code in Tailwind CSS
                    </Timeline.Title>
                    <Timeline.Body>
                        Get started with dozens of web components and
                        interactive elements built on top of Tailwind CSS.
                        <NumberTicker
                            value="985"
                            className="ml-10 text-3xl font-bold text-black"
                        />
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    );
}
