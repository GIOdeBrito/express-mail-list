
class TestController
{
	static send (req, res)
	{
		res.send({ version: "v1", time: new Date() });
	}
}

module.exports = TestController;
