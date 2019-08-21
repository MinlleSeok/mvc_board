package com.board.addon;

import java.awt.image.renderable.ParameterBlock;
import java.awt.image.renderable.RenderableImageOp;

public class Thumbnail {
	public void makeThumbnail(String path, String filename) {
		String infoimg = path+"/"+filename;
		ParameterBlock pb = new ParameterBlock();
		pb.add(infoimg);
		// RenderableImageOp rOp =
	}
}
