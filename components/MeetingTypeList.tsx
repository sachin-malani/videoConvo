"use client";

import { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const router = useRouter();

  const createMeeting = () => {
    
  }

  return (
    <section className="grid  grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        color="bg-orange-1"
        img="/icons/add-meeting.svg"
        title="New Meeting"
        desc="Start an instant meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        color="bg-blue-1"
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        desc="Plan your meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        color="bg-purple-1"
        img="/icons/recordings.svg"
        title="View Recordings"
        desc="Check out your recordings"
        handleClick={() => router.push("/recording")}
      />
      <HomeCard
        color="bg-yellow-1"
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        desc="Via inviatation link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
