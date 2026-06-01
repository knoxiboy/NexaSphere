import { usersRepository } from '../repositories/usersRepository.js';
import { toPublicUserDTO, toAdminUserDTO } from '../utils/userSerializer.js';

export async function getPublicUsers(req, res) {
  try {
    const rawUsers = await usersRepository.getAllPublicUsers();

    // Security Fix: Map raw users to safe DTOs before responding
    const safeUsers = rawUsers.map(toPublicUserDTO);

    return res.json(safeUsers);
  } catch (error) {
    console.error('[Security] Error in public users endpoint serialization:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getAdminUsers(req, res) {
  try {
    const rawUsers = await usersRepository.getAllUsersAdmin();

    // Security Fix: Use Admin DTO to ensure only expected fields are returned
    const safeUsers = rawUsers.map(toAdminUserDTO);

    return res.json(safeUsers);
  } catch (error) {
    console.error('[Security] Error in admin users endpoint serialization:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
