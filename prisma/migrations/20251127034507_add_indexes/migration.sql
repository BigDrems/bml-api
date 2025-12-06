-- CreateIndex
CREATE INDEX "Sighting_status_idx" ON "Sighting"("status");

-- CreateIndex
CREATE INDEX "Sighting_userUid_idx" ON "Sighting"("userUid");

-- CreateIndex
CREATE INDEX "Sighting_speciesId_idx" ON "Sighting"("speciesId");

-- CreateIndex
CREATE INDEX "Sighting_observedAt_idx" ON "Sighting"("observedAt");

-- CreateIndex
CREATE INDEX "Species_scientificName_idx" ON "Species"("scientificName");
