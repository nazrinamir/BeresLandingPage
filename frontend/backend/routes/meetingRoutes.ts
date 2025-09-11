import { Router, Request, Response } from 'express';
import { MeetingService } from '../services/meetingService';
import { CreateMeetingRequest, UpdateMeetingRequest } from '../types/meeting';

const router = Router();
const meetingService = new MeetingService();

// Create a new meeting
router.post('/', async (req: Request, res: Response) => {
  try {
    const { full_name, email, phone, business }: CreateMeetingRequest = req.body;

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

    const meeting = await meetingService.createMeeting({
      full_name,
      email,
      phone,
      business,
    });

    res.status(201).json({
      success: true,
      message: 'Meeting created successfully',
      data: meeting,
    });
  } catch (error: any) {
    if (error.message === 'Email already exists in meetings') {
      return res.status(409).json({
        success: false,
        message: 'This email already has a meeting scheduled',
      });
    }

    console.error('Error creating meeting:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create meeting',
    });
  }
});

// Get all meetings
router.get('/', async (req: Request, res: Response) => {
  try {
    const meetings = await meetingService.getAllMeetings();
    res.json({
      success: true,
      data: meetings,
      count: meetings.length,
    });
  } catch (error) {
    console.error('Error fetching meetings:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch meetings',
    });
  }
});

// Get meetings count
router.get('/count', async (req: Request, res: Response) => {
  try {
    const count = await meetingService.getMeetingsCount();
    res.json({
      success: true,
      count,
    });
  } catch (error) {
    console.error('Error fetching meetings count:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch meetings count',
    });
  }
});

// Search meetings
router.get('/search', async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    
    if (!q || typeof q !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Search query is required',
      });
    }

    const meetings = await meetingService.searchMeetings(q);
    res.json({
      success: true,
      data: meetings,
      count: meetings.length,
    });
  } catch (error) {
    console.error('Error searching meetings:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to search meetings',
    });
  }
});

// Get meeting by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid meeting ID',
      });
    }

    const meeting = await meetingService.getMeetingById(id);
    
    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: 'Meeting not found',
      });
    }

    res.json({
      success: true,
      data: meeting,
    });
  } catch (error) {
    console.error('Error fetching meeting:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch meeting',
    });
  }
});

// Check if email exists in meetings
router.get('/check/:email', async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const meeting = await meetingService.getMeetingByEmail(email);
    
    res.json({
      success: true,
      exists: !!meeting,
      data: meeting,
    });
  } catch (error) {
    console.error('Error checking email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to check email',
    });
  }
});

// Update meeting by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid meeting ID',
      });
    }

    const { full_name, email, phone, business }: UpdateMeetingRequest = req.body;

    // Validate email if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide a valid email address' 
        });
      }
    }

    const updatedMeeting = await meetingService.updateMeeting(id, {
      full_name,
      email,
      phone,
      business,
    });

    if (!updatedMeeting) {
      return res.status(404).json({
        success: false,
        message: 'Meeting not found',
      });
    }

    res.json({
      success: true,
      message: 'Meeting updated successfully',
      data: updatedMeeting,
    });
  } catch (error: any) {
    if (error.message === 'Email already exists in meetings') {
      return res.status(409).json({
        success: false,
        message: 'This email already has a meeting scheduled',
      });
    }

    if (error.message === 'No fields to update') {
      return res.status(400).json({
        success: false,
        message: 'No fields provided to update',
      });
    }

    console.error('Error updating meeting:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update meeting',
    });
  }
});

// Delete meeting by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid meeting ID',
      });
    }

    const deleted = await meetingService.deleteMeeting(id);
    
    if (deleted) {
      res.json({
        success: true,
        message: 'Meeting deleted successfully',
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Meeting not found',
      });
    }
  } catch (error) {
    console.error('Error deleting meeting:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete meeting',
    });
  }
});

// Delete meeting by email
router.delete('/email/:email', async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const deleted = await meetingService.deleteMeetingByEmail(email);
    
    if (deleted) {
      res.json({
        success: true,
        message: 'Meeting deleted successfully',
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Meeting with this email not found',
      });
    }
  } catch (error) {
    console.error('Error deleting meeting:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete meeting',
    });
  }
});

export default router;
