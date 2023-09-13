import { Todo } from "@/types/Todo";
import { faker } from "@faker-js/faker";

function createRandomCategories(): Todo {
  return {
    id: faker.number.int(),
    title: faker.string.sample(25),
    userId: faker.number.int(),
    completed: faker.datatype.boolean(),
  };
}

export const TODOS: Todo[] = faker.helpers.multiple(createRandomCategories, {
  count: 3,
});

const SINGLETODO: Todo[] = faker.helpers.multiple(createRandomCategories, {
  count: 1,
});

export const TODO = SINGLETODO[0];
