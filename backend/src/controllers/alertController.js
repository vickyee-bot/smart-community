import { prisma } from "../utils/prismaClient.js";

export const createAlert = async (req, res) => {
  try {
    const { title, message, targetAudience } = req.body;

    const alert = await prisma.alert.create({
      data: {
        title,
        message,
        targetAudience,
        createdById: req.user.id,
      },
    });

    res.status(201).json(alert);
  } catch (error) {
    res.status(500).json({ message: "Failed to create alert" });
  }
};

export const getAlerts = async (req, res) => {
  try {
    const alerts = await prisma.alert.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(alerts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch alerts" });
  }
};

export const deleteAlert = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.alert.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: "Alert deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete alert" });
  }
};
