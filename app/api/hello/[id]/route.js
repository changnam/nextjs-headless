export async function GET(request, {params}){
    return Response.json({postId: params.id});
 } 