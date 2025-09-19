import { Router, Request, Response } from 'express';
import { WaitlistService } from '../services/waitlistService';
import { CreateWaitlistRequest } from '../types/waitlist';

const router = Router();
const waitlistService = new WaitlistService();

// Add to waitlist
router.post('/', async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, phone, business }: CreateWaitlistRequest = req.body;

    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required' 
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Phone validation - only digits allowed (optional + at beginning)
    if (phone && phone.trim()) {
      const phoneRegex = /^\+?[0-9]+$/;
      if (!phoneRegex.test(phone.trim())) {
        return res.status(400).json({
          success: false,
          message: 'Phone number must contain only digits'
        });
      }
      
      const cleanPhone = phone.replace(/^\+/, '');
      if (cleanPhone.length < 8 || cleanPhone.length > 15) {
        return res.status(400).json({
          success: false,
          message: 'Phone number must be between 8 and 15 digits'
        });
      }
    }

    const waitlistEntry = await waitlistService.addToWaitlist({
      first_name,
      last_name,
      email,
      phone,
      business,
    });

    res.status(201).json({
      success: true,
      message: 'Successfully added to waitlist',
      data: waitlistEntry,
    });
  } catch (error: any) {
    if (error.message === 'Email already exists in waitlist') {
      return res.status(409).json({
        success: false,
        message: 'This email is already on the waitlist',
      });
    }

    console.error('Error adding to waitlist:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add to waitlist',
    });
  }
});

// Get all waitlist entries (for admin use)
router.get('/', async (req: Request, res: Response) => {
  try {
    const entries = await waitlistService.getAllWaitlistEntries();
    res.json({
      success: true,
      data: entries,
      count: entries.length,
    });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch waitlist',
    });
  }
});

// Get waitlist count
router.get('/count', async (req: Request, res: Response) => {
  try {
    const count = await waitlistService.getWaitlistCount();
    res.json({
      success: true,
      count,
    });
  } catch (error) {
    console.error('Error fetching waitlist count:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch waitlist count',
    });
  }
});

// Check if email exists in waitlist
router.get('/check/:email', async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const entry = await waitlistService.getWaitlistByEmail(email);
    
    res.json({
      success: true,
      exists: !!entry,
      data: entry,
    });
  } catch (error) {
    console.error('Error checking email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to check email',
    });
  }
});

// Delete from waitlist (for admin use)
router.delete('/:email', async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const deleted = await waitlistService.deleteFromWaitlist(email);
    
    if (deleted) {
      res.json({
        success: true,
        message: 'Successfully removed from waitlist',
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Email not found in waitlist',
      });
    }
  } catch (error) {
    console.error('Error deleting from waitlist:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to remove from waitlist',
    });
  }
});

export default router;
