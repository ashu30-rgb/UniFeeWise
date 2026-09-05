-- CreateEnum
CREATE TYPE "FunnelStage" AS ENUM ('CALCULATOR_COMPLETED', 'WHATSAPP_NURTURE', 'EMAIL_REMINDER_SENT', 'DISCOUNT_CODE_CLICKED', 'APPLICATION_SUBMITTED');

-- CreateEnum
CREATE TYPE "ScholarshipTier" AS ENUM ('CATEGORY_A', 'CATEGORY_B', 'CATEGORY_C', 'NONE');

-- CreateTable
CREATE TABLE "LeadHistory" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsappNumber" TEXT,
    "targetBranch" TEXT NOT NULL DEFAULT 'B.Tech CSE',
    "expectedScore" DECIMAL(5,2),
    "assignedTier" "ScholarshipTier",
    "baseTuitionPerSem" INTEGER NOT NULL DEFAULT 160000,
    "calculatedScholarshipAmount" INTEGER,
    "funnelStatus" "FunnelStage" NOT NULL DEFAULT 'CALCULATOR_COMPLETED',
    "discountCodeUsed" BOOLEAN NOT NULL DEFAULT false,
    "registrationDeadline" TIMESTAMP(3),
    "lastReminderSentAt" TIMESTAMP(3),
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LeadHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LeadHistory_email_key" ON "LeadHistory"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LeadHistory_whatsappNumber_key" ON "LeadHistory"("whatsappNumber");

-- CreateIndex
CREATE INDEX "LeadHistory_registrationDeadline_idx" ON "LeadHistory"("registrationDeadline");
