import {DateValueObject} from '../../shared/domain/value-object/date.value-object';

export default class PostDate extends DateValueObject {
    static fromString(date: string): PostDate {
        return new PostDate(new Date(date))
    }

    toDateString() {
        return new Intl.DateTimeFormat("es", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }).format(this.value());
    }

    compareTo(date: PostDate): number {
        return date.value().getTime() - this.value().getTime();
    }
}
