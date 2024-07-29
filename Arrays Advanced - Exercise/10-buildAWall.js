function trackWallConstruction(initialHeights) {
    const concretePerSectionPerDay = 195;
    const costPerCubicYard = 1900;
    const targetHeight = 30;

    let heights = initialHeights.map(Number);
    let dailyConcreteUsage = [];
    let totalConcreteUsed = 0;

    while (heights.some(height => height < targetHeight)) {
        let dailyUsage = 0;

        for (let i = 0; i < heights.length; i++) {
            if (heights[i] < targetHeight) {
                heights[i]++;
                dailyUsage += concretePerSectionPerDay;
            }
        }

        dailyConcreteUsage.push(dailyUsage);
        totalConcreteUsed += dailyUsage;
    }

    let finalCost = totalConcreteUsed * costPerCubicYard;

    console.log(dailyConcreteUsage.join(', '));
    console.log(finalCost + ' pesos');
}

const initialHeights = [21, 25, 28];
trackWallConstruction(initialHeights);
