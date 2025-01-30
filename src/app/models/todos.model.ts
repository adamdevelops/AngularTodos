import { Todo } from "./todo.model";

export interface Todos {
    items: Todo[] | undefined;

}

// export type Todos = Todo[]; // ✅ Should be an array type