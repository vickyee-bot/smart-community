import { prisma } from "../utils/prismaClient.js";

// Create a new incident
export const createIncident = async (req, res) => {
  try {
    const { title, description, type, latitude, longitude } = req.body;
    const newIncident = await prisma.incident.create({
      data: {
        title,
        description,
        type,
        latitude,
        longitude,
        reportedById: req.user.id,
      },
    });
    res.status(201).json(newIncident);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create incident" });
  }
};

// Get all incidents
export const getIncidents = async (req, res) => {
  try {
    const incidents = await prisma.incident.findMany({
      include: { reportedBy: true },
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(incidents);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch incidents" });
  }
};

// Update incident status
export const updateIncidentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await prisma.incident.update({
      where: { id: parseInt(id) },
      data: { status },
    });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update incident status" });
  }
};

// Delete incident
export const deleteIncident = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.incident.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: "Incident deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete incident" });
  }
};
