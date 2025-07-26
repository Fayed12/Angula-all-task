import { Injectable } from '@angular/core';
import { Iuser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class User {
  private users: Iuser[] = [
    {
      "id": 1,
      "name": "Ibrahim mohamed",
      "imgurl": "https://randomuser.me/api/portraits/men/32.jpg",
      "password": "123"
    },
    {
      "id": 2,
      "name": "Mona Ali",
      "imgurl": "https://randomuser.me/api/portraits/women/44.jpg",
      "password": "356"
    },
    {
      "id": 3,
      "name": "Ahmed Samir",
      "imgurl": "https://randomuser.me/api/portraits/men/41.jpg",
      "password": "789"
    },
    {
      "id": 4,
      "name": "Laila Hassan",
      "imgurl": "https://randomuser.me/api/portraits/women/35.jpg",
      "password": "111"
    },
    {
      "id": 5,
      "name": "Karim Nabil",
      "imgurl": "https://randomuser.me/api/portraits/men/46.jpg",
      "password": "222"
    },
    {
      "id": 6,
      "name": "Nour El-Din",
      "imgurl": "https://randomuser.me/api/portraits/men/55.jpg",
      "password": "333"
    },
    {
      "id": 7,
      "name": "Heba Adel",
      "imgurl": "https://randomuser.me/api/portraits/women/25.jpg",
      "password": "444"
    },
    {
      "id": 8,
      "name": "Omar Fathy",
      "imgurl": "https://randomuser.me/api/portraits/men/23.jpg",
      "password": "555"
    },
    {
      "id": 9,
      "name": "Sara Mohamed",
      "imgurl": "https://randomuser.me/api/portraits/women/29.jpg",
      "password": "666"
    },
    {
      "id": 10,
      "name": "Hassan Ali",
      "imgurl": "https://randomuser.me/api/portraits/men/64.jpg",
      "password": "777"
    },
    {
      "id": 11,
      "name": "Yasmin Ibrahim",
      "imgurl": "https://randomuser.me/api/portraits/women/38.jpg",
      "password": "888"
    },
    {
      "id": 12,
      "name": "Mahmoud Khaled",
      "imgurl": "https://randomuser.me/api/portraits/men/71.jpg",
      "password": "999"
    }
  ];
  getAllUsers(): Iuser[] {
    return this.users;
  }
  getUserById(id: number): Iuser | undefined {
    return this.users.find(u => u.id === id);
  }
  addUser(user: Iuser) {
    this.users.push(user);
  }
  updateUser(updatedUser: Iuser) {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    this.users[index] = { ...updatedUser };
  }
  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }
  login(name: string, password: string): Iuser | undefined {
    return this.users.find(u => u.name === name && u.password === password);
  }
  loggedinuser: Iuser | null = null;
  setlogeduser(user: Iuser) {
    this.loggedinuser = user
    localStorage.setItem('user', JSON.stringify(user));
  }
  getlogeduser(): Iuser {
    return this.loggedinuser || JSON.parse(localStorage.getItem('user')!);
  }
  logout() {
    this.loggedinuser = null;
    localStorage.removeItem('user');
  }
  getuser(): Iuser | null {
    return this.loggedinuser || JSON.parse(localStorage.getItem('user')!);
  }
  Authenticated(): boolean {
    return this.getuser() !== null;
  }
}
