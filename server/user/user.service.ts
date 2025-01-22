import { UserRepository } from './user.repository';
import { User } from './user.entity';

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async getById(id: number): Promise<User | null> {
    return this.userRepository.findOne(id);
  }

  async create(id: number, email: string): Promise<User> {
    return this.userRepository.create(id, email);
  }
}
