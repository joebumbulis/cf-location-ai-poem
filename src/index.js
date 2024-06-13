export default {
	async fetch(request, env, ctx) {
		const location = request ? request.cf.city || request.cf.region || request.cf.country : "Austin";


		const answer = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
			prompt: `Write a funny poem about ${location} in the form of a rap battle`,
			stream: true
		});

		return new Response(answer, {
			headers: { "content-type": "text/event-stream" }
		});
		// return new Response(JSON.stringify(answer));

	},
};

