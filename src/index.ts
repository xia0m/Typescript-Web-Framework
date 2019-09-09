import { User } from './models/User';

// const user = new User({ id: 1 });

// user.set({ name: 'New name', age: 1234 });

// user.save();

const user = new User({ name: 'new record', age: 5555 });
user.save();
