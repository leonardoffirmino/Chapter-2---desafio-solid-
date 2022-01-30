import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const id = user_id.toString();

    const user = this.turnUserAdminUseCase.execute({ user_id: id });

    return response.json(user);
  }
}

export { TurnUserAdminController };
