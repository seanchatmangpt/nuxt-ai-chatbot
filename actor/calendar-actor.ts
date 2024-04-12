import { ActorSystem, BaseActor, BaseMessage } from "dpgjs";
// @ts-ignore
import { Duration, DateTime } from "luxon";

class SetContentRestrictionsMessage extends BaseMessage {
  constructor(public restrictedKeywords: string[]) {
    super({ attributes: { messageType: "SetContentRestrictions" } });
  }
}

class CheckContentMessage extends BaseMessage {
  constructor(public content: string) {
    super({ attributes: { messageType: "CheckContent" } });
  }
}

class ContentCheckedMessage extends BaseMessage {
  constructor(public isAllowed: boolean) {
    super({ attributes: { messageType: "ContentChecked" } });
  }
}

class ContentRestrictionActor extends BaseActor {
  private restrictedKeywords: string[] = [];

  constructor(actorSystem: ActorSystem, actorId: string) {
    super(actorSystem, actorId);
  }

  async handleContentRestrictionsMessage(
    message: SetContentRestrictionsMessage,
  ): Promise<void> {
    this.restrictedKeywords = message.restrictedKeywords;
    console.log("Content restrictions set:", this.restrictedKeywords);
  }

  async handleCheckContentMessage(message: CheckContentMessage): Promise<void> {
    const isAllowed = this.checkContent(message.content);
    this.publish(new ContentCheckedMessage(isAllowed));
  }

  private checkContent(content: string): boolean {
    for (const keyword of this.restrictedKeywords) {
      if (content.toLowerCase().includes(keyword.toLowerCase())) {
        return false;
      }
    }
    return true;
  }
}

// Message types
class SetMaxEventDurationMessage extends BaseMessage {
  constructor(public maxDuration: Duration) {
    super({ attributes: { messageType: "SetMaxEventDuration" } });
  }
}

class CheckEventDurationMessage extends BaseMessage {
  constructor(
    public startTime: DateTime,
    public endTime: DateTime,
  ) {
    super({ attributes: { messageType: "CheckEventDuration" } });
  }
}

class EventDurationCheckedMessage extends BaseMessage {
  constructor(public isAllowed: boolean) {
    super({ attributes: { messageType: "EventDurationChecked" } });
  }
}

// EventDurationLimiterActor
class EventDurationLimiterActor extends BaseActor {
  private maxDuration: Duration = Duration.fromObject({ hours: 2 }); // Default max duration of 2 hours

  constructor(actorSystem: ActorSystem, actorId: string) {
    super(actorSystem, actorId);
  }

  async handleSetMaxEventDurationMessage(
    message: SetMaxEventDurationMessage,
  ): Promise<void> {
    this.maxDuration = message.maxDuration;
    console.log("Max event duration set:", this.maxDuration.toHuman());
  }

  async handleCheckEventDurationMessage(
    message: CheckEventDurationMessage,
  ): Promise<void> {
    const isAllowed = this.checkEventDuration(
      message.startTime,
      message.endTime,
    );
    this.publish(new EventDurationCheckedMessage(isAllowed));
  }

  private checkEventDuration(startTime: DateTime, endTime: DateTime): boolean {
    const eventDuration = endTime.diff(startTime);
    return eventDuration <= this.maxDuration;
  }
}

class SetAllowedTodoStatusesMessage extends BaseMessage {
  constructor(public allowedStatuses: string[]) {
    super({ attributes: { messageType: "SetAllowedTodoStatuses" } });
  }
}

class CheckTodoStatusMessage extends BaseMessage {
  constructor(public todoStatus: string) {
    super({ attributes: { messageType: "CheckTodoStatus" } });
  }
}

class TodoStatusCheckedMessage extends BaseMessage {
  constructor(public isAllowed: boolean) {
    super({ attributes: { messageType: "TodoStatusChecked" } });
  }
}

// TodoStatusManagerActor
class TodoStatusManagerActor extends BaseActor {
  private allowedStatuses: string[] = ["NEEDS-ACTION", "COMPLETED"];

  constructor(actorSystem: ActorSystem, actorId: string) {
    super(actorSystem, actorId);
  }

  async handleSetAllowedTodoStatusesMessage(
    message: SetAllowedTodoStatusesMessage,
  ): Promise<void> {
    this.allowedStatuses = message.allowedStatuses;
    console.log("Allowed todo statuses set:", this.allowedStatuses);
  }

  async handleCheckTodoStatusMessage(
    message: CheckTodoStatusMessage,
  ): Promise<void> {
    const isAllowed = this.checkTodoStatus(message.todoStatus);
    this.publish(new TodoStatusCheckedMessage(isAllowed));
  }

  private checkTodoStatus(todoStatus: string): boolean {
    return this.allowedStatuses.includes(todoStatus);
  }
}

// Calendar Aggregate Root
class CalendarAggregateRoot extends BaseActor {
  private contentRestrictionActor: ContentRestrictionActor;
  private eventDurationLimiterActor: EventDurationLimiterActor;
  private todoStatusManagerActor: TodoStatusManagerActor;

  constructor(actorSystem: ActorSystem, actorId: string) {
    super(actorSystem, actorId);
    this.contentRestrictionActor = actorSystem.actorOf(
      ContentRestrictionActor,
      "contentRestriction",
    ) as ContentRestrictionActor;
    this.eventDurationLimiterActor = actorSystem.actorOf(
      EventDurationLimiterActor,
      "eventDurationLimiter",
    ) as EventDurationLimiterActor;
    this.todoStatusManagerActor = actorSystem.actorOf(
      TodoStatusManagerActor,
      "todoStatusManager",
    ) as TodoStatusManagerActor;
  }
}

// Usage example
const actorSystem = new ActorSystem();
const calendarAggregateRoot = actorSystem.actorOf(
  CalendarAggregateRoot,
  "calendarAggregateRoot",
);
