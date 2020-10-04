// @desc GET all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
    res
			.status(200)
			.json({
					success: true,
					msg: "Show all bootcamps"
			});
}

// @desc GET single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getSingleBootcamp = (req, res, next) => {
    res
			.status(200)
			.json({
					success: true,
					msg: `Get bootcamp ${req.params.id}`
			});
	}

// @desc Create new bootcamp
// @route GET /api/v1/bootcamps
// @access Public
exports.createBootcamp = (req, res, next) => {
    res
			.status(200)
			.json({
					success: true,
					msg: "Create new bootcamp"
			});
}

// @desc Update bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.updateSingleBootcamp = (req, res, next) => {
    res
			.status(200)
			.json({
					success: true,
					msg: `Update bootcamp ${req.params.id}`
			});
}

// @desc Delete bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.deleteSingleBootcamp = (req, res, next) => {
    res
			.status(200)
			.json({
					success: true,
					msg: `Delete bootcamp ${req.params.id}`
			});
}
