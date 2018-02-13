import { of } from "rxjs/index"
import { map } from "rxjs/operators/index"

of(1,2,3).pipe(map(x => x * 2)).subscribe(console.log)
